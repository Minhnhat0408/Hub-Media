'use client';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import axios from 'axios';
import { toast } from 'react-hot-toast';
// import { sendEmail } from '@/app/api/_fetch/resend';
const ContactSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email.',
    }),
    name: z.string({
        required_error: 'Please enter your name.',
    }),
    phone: z.string().regex(/^[0-9]+$/,"Please enter a valid phone number").min(10, { message: 'Please enter a valid phone number'}),
    message: z.string().optional(),
    services: z.string({
        required_error: 'Please select your service.',
    }),
});
type tContactSchema = z.infer<typeof ContactSchema>;
export default function ContactForm({
    listServices,
    defaultService,
}: {
    listServices: Object;
    defaultService: string | undefined;
}) {
    const form = useForm<tContactSchema>({
        resolver: zodResolver(ContactSchema),
        defaultValues: { services: defaultService },
    });
    async function onSubmit(values: tContactSchema) {
        const formdata = new FormData();
        formdata.append('name', values.name);
        formdata.append('email', values.email);
        formdata.append('phone', values.phone.toString());
        formdata.append('message', values.message || 'Không có lời nhắn nào từ khách hàng');
        formdata.append('services', values.services);

        const res = await toast.promise(
            axios.post('/api/contact', formdata),
            {
                loading: 'Please wait for a moment',
                success: (data) => {
                    form.reset();
                    return <p> Form has been saved</p>;
                },
                error: 'Error while sending form',
            },
            {
                style: {
                    minWidth: '200px',
                    minHeight: '50px',
                    fontSize: '16px',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1))',
                    color: 'var(--gradient)',
                },
                success: {
                    duration: 3000,
                    icon: '✅',
                },
                error: {
                    duration: 3000,
                    icon: '❌',
                    style: {
                        minWidth: '250px',
                        minHeight: '60px',
                        fontSize: '20px',
                        backgroundColor: 'var(--primary)',
                        color: 'red',
                    },
                },
            },
        );
        return res

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn('mt-9  w-full sm:space-y-12 space-y-6 ')}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="h-[50px]">
                            <FormControl>
                                <Input
                                    placeholder="Full Name"
                                    type="text"
                                    {...field}
                                    className="rounded-none border-l-0 border-r-0 border-t-0 border-white bg-transparent text-base tracking-wider text-gradient duration-500 placeholder:text-muted-foreground focus-visible:border-b-primary focus-visible:!ring-0 focus-visible:!ring-offset-0  focus-visible:placeholder:text-primary"
                                />
                            </FormControl>
                            <FormMessage className="text-gradient" />
                        </FormItem>
                    )}
                />
                <div className="flex ssm:flex-row  flex-col gap-x-20 gap-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="h-[50px] w-full">
                                <FormControl>
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        {...field}
                                        className="rounded-none border-l-0 border-r-0 border-t-0 border-white bg-transparent text-base tracking-wider text-gradient duration-500 placeholder:text-muted-foreground focus-visible:border-b-primary focus-visible:!ring-0 focus-visible:!ring-offset-0  focus-visible:placeholder:text-primary"
                                    />
                                </FormControl>
                                <FormMessage className="text-gradient" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="h-[50px] w-full">
                                <FormControl>
                                    <Input
                                        placeholder="Phone"
                                        type="text"
                                        {...field}
                                        className="rounded-none border-l-0 border-r-0 border-t-0 border-white bg-transparent text-base tracking-wider text-gradient duration-500 placeholder:text-muted-foreground focus-visible:border-b-primary focus-visible:!ring-0 focus-visible:!ring-offset-0  focus-visible:placeholder:text-primary"
                                    />
                                </FormControl>
                                <FormMessage className="text-gradient" />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="services"
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={defaultService || field.value}>
                                <FormControl>
                                    <SelectTrigger
                                        className={cn(
                                            'rounded-none border-[2px] border-l-0 border-r-0 border-t-0 border-muted-foreground text-base text-muted-foreground placeholder:text-muted-foreground',
                                            (form.getValues().services || defaultService) && ' text-gradient',
                                        )}
                                    >
                                        <SelectValue placeholder="Select a Services of your choice" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-background">
                                    {Object.keys(listServices).map((key, index) => (
                                        <SelectItem key={index} value={key}>
                                            {key}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className="h-[70px]">
                            <FormControl>
                                <Textarea
                                    placeholder="Additional Message"
                                    {...field}
                                    className="rounded-none border-l-0 border-r-0 border-t-0 border-white bg-transparent text-base tracking-wider text-gradient duration-500 placeholder:text-muted-foreground focus-visible:border-b-primary focus-visible:!ring-0 focus-visible:!ring-offset-0  focus-visible:placeholder:text-primary"
                                />
                            </FormControl>
                            <FormMessage className="text-gradient" />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="items-centers !mt-20 flex  font-bold uppercase tracking-widest "
                >
                    Submit
                    {form.formState.isSubmitting && <AiOutlineLoading3Quarters className="ml-3 animate-spin " />}
                </Button>
            </form>
        </Form>
    );
}
