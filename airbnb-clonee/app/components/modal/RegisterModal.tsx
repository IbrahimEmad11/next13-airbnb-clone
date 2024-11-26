'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback,useState } from 'react';
import{
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'

import useRegisterModal from '../../hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../Input';
import toast from 'react-hot-toast';
import Button from '../Button';


const RegisterModal = () => {

    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const { 
        register,
        handleSubmit,
        formState: { errors }

    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',  
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> =  (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((error) => {
                toast.error("Invalid credentials. Please try again.");
            })
            .finally(() => {
                setIsLoading(false);
            });
        };

    const bodyContent =( 
            <div className='flex flex-col gap-4'>
                <Heading
                title = 'Welcome to Airbnb'
                subtitle = 'Create an account!'
                center
                />
                <Input 
                    id='email'
                    label='Email'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input 
                    id='name'
                    label='Name'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input 
                    id='password'
                    label='Password'
                    type='password'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
    );

    const footerContent = (
        <div className='flex flex-col gap-4'>
            <hr/>
            
            <Button
                outline
                title='Continue with Google'
                icon = {FcGoogle}
                onClick={() => {}}
                />
            <Button
                outline
                title='Continue with Github'
                icon = {AiFillGithub}
                onClick={() => {}}
                />
            <div className='flex flex-row items-center gap-2 justify-center'>
                <div className='text-neutral-500'>
                    Already have an account?
                </div>
                <div  
                className='text-neutral-900 cursor-pointer hover:underline'
                onClick={registerModal.onClose}
                >
                    Login
                </div>
            </div>
        </div>
    );
            
    return ( 
        <Modal
        disabled = {isLoading}
        title='Register'
        isOpen={registerModal.isOpen}
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        actionLabel='Continue'
        body = {bodyContent}
        footer={footerContent}  
        />
     );
}
 
export default RegisterModal;