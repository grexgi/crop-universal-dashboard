import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DatePicker from 'react-native-date-picker';

export default function Page() {
    useSafeAreaInsets();
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            selectedDate: ''
        }
    });

    const onSubmit = data => {
        console.log(data);
    };

    const onChange = arg => {
        return {
            value: arg.nativeEvent.text,
        };
    };

    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    const onConfirm = (date) => {
        setOpen(false);
        setDate(date);
        setValue('selectedDate', date); // Update the form value
    };

    const onCancel = () => {
        setOpen(false);
    };

    console.log('errors', errors);

    return (
        <View className='flex flex-1 p-10 bg-neutral-200'>
            <Text className='font-semibold text-neutral-900 my-2'>First name</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        className='border border-s-green-950 p-2 rounded-md'
                        placeholder='first name....'
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="firstName"
                rules={{ required: true }}
            />

            <Text className='font-semibold text-neutral-900 my-2'>Last name</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        className='border border-s-green-950 p-2 rounded-md'
                        placeholder='last name....'
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="lastName"
                rules={{ required: true }}
            />

            <Text className='font-semibold text-neutral-900 my-2'>Date</Text>
            <Pressable onPress={() => setOpen(true)}>
                <Text>{date.toLocaleDateString()}</Text>
            </Pressable>
            {open && (
                <DatePicker
                    mode="date"
                    date={date}
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                />
            )}

            <Pressable
                className='p-2 my-2 items-center justify-center bg-green-700'
                onPress={handleSubmit(onSubmit)}>
                <Text className=' text-white font-semibold'>BUTTON</Text>
            </Pressable>

            <Pressable
                className='p-2 items-center justify-center bg-green-700'
                onPress={() => {
                    reset({
                        firstName: null,
                        lastName: null
                    })
                }}>
                <Text className=' text-white font-semibold'>RESET</Text>
            </Pressable>
        </View>
    );
};