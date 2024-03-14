import React, { useCallback, useEffect, useState } from 'react';
import storageService from '../../appwrite/storage';
import dbService from '../../appwrite/database';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Input, Editor, Select } from '../index';
import { useForm } from 'react-hook-form';
import { Container } from '../index';

function PostForm({ post }) {
    
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userDetail);
    const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
        defaultValues: {
            Title: post?.Title || '',
            Slug: post?.Slug || '',
            Content : post?.Content || '',
            Image : post?.Image || '',
            IsActive : post?.IsActive || true
        }
    });

    useEffect(()=> {
        const subscription = watch((value,{name}) => {
            if(name === 'Title') {
                setValue('Slug', handleSlug(value.Title), { shouldValidate: true });
            }
        });

        return () =>  subscription.unsubscribe();

    },[watch, setValue, handleSlug]);

    const handleSlug = useCallback((value) => {
        if (value && typeof value === 'string') {
            const slug = value.trim().toLowerCase().replace(/\s+/g, '-');
            return slug;
        }
    }, []);

    const submitHandler = async (data) => {
        try {
            if(post) {
                const file = data.Image[0] ? await storageService.uploadFile(data.Image[0]) : undefined;
                if (file) {
                    await storageService.deleteFile(post.Image);
                }

                const Post = await dbService.updatePost(post.$id, { ...data, Image: file ? file.$id : post.Image });

                if(Post) {
                    navigate(`/post/${Post.$id}`);
                }
            } else {
                const file = data.Image[0] ? await storageService.uploadFile(data.Image[0]) : undefined;
                if(file) {
                    const Post = await dbService.createPost({ ...data, UserId: userData.$id });
                    if(Post) {
                        navigate(`/post/${Post.$id}`);
                    }
                }
            }
        } catch (error) {
            setError(error);
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(submitHandler)} className="flex flex-wrap">
                <div className="w-2/3 px-2">
                    <Input
                        label="Title :"
                        placeholder="Title"
                        className="mb-4"
                        {...register("Title", { required: true })}
                    />
                    <Input
                        label="Slug :"
                        placeholder="Slug"
                        className="mb-4"
                        {...register("Slug", { required: true })}
                        onInput={(e) => {
                            setValue("Slug", handleSlug(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    <Editor label="Content :" name="Content" control={control} defaultValue={getValues("Content")} />
                </div>
                <div className="w-1/3 px-2">
                    <Input
                        label="Image :"
                        type="file"
                        className="mb-4"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("Image", { required: !post })}
                    />
                    {post && (
                        <div className="w-full mb-4">
                            <img
                                src={appwriteService.getFilePreview(post.Image)}
                                alt={post.Title}
                                className="rounded-lg"
                            />
                        </div>
                    )}
                    <Select
                        options={[true, false]} // Pass boolean values as options
                        label="Status"
                        className="mb-4"
                        {...register("IsActive", { required: true })}
                    />
                    <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                        {post ? "Update" : "Submit"}
                    </Button>
                </div>
            </form>
        </Container>
    );
}

export default PostForm;
