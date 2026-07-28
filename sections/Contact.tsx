import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';

// --- Helper Types ---
type FormState = {
    errors?: {
        getFieldErrors?: (field: string) => readonly unknown[];
    } | null;
    succeeded?: boolean;
    submitting?: boolean;
};

// --- Helper Function ---
const hasFieldError = (state: FormState, fieldName: string): boolean => {
    const errors = state.errors;

    if (!errors || typeof errors !== 'object') {
        return false;
    }

    if ('getFieldErrors' in errors && typeof errors.getFieldErrors === 'function') {
        const fieldErrors = (errors.getFieldErrors as (field: string) => readonly unknown[])(fieldName);
        return Array.isArray(fieldErrors) && fieldErrors.length > 0;
    }

    if (Array.isArray(errors)) {
        return errors.some((error) => {
            if (!error || typeof error !== 'object') return false;
            return 'field' in error && (error as { field?: string }).field === fieldName;
        });
    }

    return false;
};

// --- Sub-Components ---

const ContactForm: React.FC = () => {
    const [state, handleSubmit] = useForm('xlgqaqne');
    const hasError = (fieldName: string) => hasFieldError(state, fieldName);

    return (
        <Card className="w-full max-w-[500px] border border-accent-mahogany/40 bg-museum-surface p-6 shadow-xl rounded-xl text-stone-300">
            {/* Render both success message and form, but conditionally hide one */}
            <div className={state.succeeded ? 'block' : 'hidden'}>
                <div className="mt-4 flex h-full flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                        <CheckCircle className="h-16 w-16 text-emerald-500" aria-hidden="true" />
                    </div>
                    <div className="mt-4 text-xl font-medium text-emerald-400 font-display">
                        Thank you!
                    </div>
                    <p className="mt-2 text-center text-stone-400 font-body">
                        I&apos;ll get back to you as soon as possible.
                    </p>
                </div>
            </div>

            <form
                onSubmit={handleSubmit}
                className={`space-y-6 ${state.succeeded ? 'hidden' : 'block'}`}
                aria-label="Contact form"
            >
                <FormField
                    label="Name"
                    fieldName="name"
                    required
                    errorMessage={<ValidationError prefix="Name" field="name" errors={state.errors} />}
                    hasError={hasError('name')}
                >
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        aria-label="Name"
                        className="w-full bg-museum-dark border-stone-700 text-stone-100 focus:border-accent-amber"
                        autoComplete="name"
                        required
                    />
                </FormField>

                <FormField
                    label="Email Address"
                    fieldName="email"
                    required
                    errorMessage={<ValidationError prefix="Email" field="email" errors={state.errors} />}
                    hasError={hasError('email')}
                >
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        aria-label="Email Address"
                        className="w-full bg-museum-dark border-stone-700 text-stone-100 focus:border-accent-amber"
                        autoComplete="email"
                        required
                    />
                </FormField>

                <FormField
                    label="Inquiry Type"
                    fieldName="inquiryType"
                    required
                    errorMessage={<ValidationError prefix="Inquiry Type" field="inquiryType" errors={state.errors} />}
                    hasError={hasError('inquiryType')}
                >
                    <Select name="inquiryTypeSelect" required>
                        <SelectTrigger
                            id="inquiryType"
                            aria-label="Inquiry Type"
                            className="w-full bg-museum-dark border-stone-700 text-stone-100 focus:border-accent-amber"
                        >
                            <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="bg-museum-surface border-stone-700 text-stone-100">
                            <SelectItem value="general">General Question</SelectItem>
                            <SelectItem value="offer">Acquisition Offer</SelectItem>
                            <SelectItem value="history">Historical Information</SelectItem>
                        </SelectContent>
                    </Select>
                </FormField>

                <FormField
                    label="Message"
                    fieldName="message"
                    required
                    errorMessage={<ValidationError prefix="Message" field="message" errors={state.errors} />}
                    hasError={hasError('message')}
                >
                    <Textarea
                        id="message"
                        name="message"
                        aria-label="Message"
                        className="w-full bg-museum-dark border-stone-700 text-stone-100 focus:border-accent-amber"
                        autoComplete="off"
                        required
                    />
                </FormField>

                <FormField label="Phone Number (optional)" fieldName="phone">
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        aria-label="Phone Number"
                        className="w-full bg-museum-dark border-stone-700 text-stone-100 focus:border-accent-amber"
                        autoComplete="tel"
                    />
                </FormField>

                <FormField label="Company (optional)" fieldName="company">
                    <Input
                        id="company"
                        name="company"
                        type="text"
                        aria-label="Company"
                        className="w-full bg-museum-dark border-stone-700 text-stone-100 focus:border-accent-amber"
                        autoComplete="organization"
                    />
                </FormField>

                <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-accent-mahogany transition-all duration-300 hover:bg-accent-amber text-white font-display uppercase tracking-wider"
                    aria-label={state.submitting ? 'Submitting form' : 'Submit message'}
                >
                    {state.submitting ? (
                        <div className="mr-2 opacity-80">
                            <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        </div>
                    ) : (
                        <>
                            Submit
                            <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                        </>
                    )}
                </Button>
            </form>
        </Card>
    );
};

interface FormFieldProps {
    label: string;
    fieldName: string;
    required?: boolean;
    errorMessage?: React.ReactNode;
    children: React.ReactNode;
    hasError?: boolean;
    className?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, fieldName, required, errorMessage, children, hasError }) => {
    return (
        <div className="space-y-2">
            <Label htmlFor={fieldName} className="font-medium text-stone-300 font-body">
                {label} {required && <span className="text-red-500">*</span>}
            </Label>
            <div className={hasError ? 'border-red-500' : ''}>{children}</div>
            {hasError && <div className="text-sm text-red-500">{errorMessage}</div>}
        </div>
    );
};

const Contact: React.FC = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-transparent text-stone-300 py-24"
        >
            <div className="w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display uppercase tracking-widest text-stone-100">
                    Acquisition & Provenance Inquiries
                    </h2>
                    <p className="text-stone-400 font-body text-base md:text-lg max-w-2xl mx-auto">
                    This camera is currently held in a private collection and is undergoing continued historical research. Serious inquiries regarding acquisition, or information regarding its provenance, are welcome.
                    </p>
                </div>
                <div className="mx-auto mt-8 flex flex-col gap-8 justify-center items-center px-4 md:flex-row md:items-start">
                    <div className="flex-1 max-w-[500px] w-full">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;