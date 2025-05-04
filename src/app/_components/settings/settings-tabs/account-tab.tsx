import { Loader, PowerIcon, Trash } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { Button } from '~/components/ui/button';
import { api } from '~/trpc/react';

const AccountTab = () => {
    const { mutate: deleteAccount, isPending } = api.user.deleteAccount.useMutation({
        onSuccess: () => {
            redirect('/');
        },
    });

    return (
        <div className="flex flex-col items-center justify-center space-y-6 px-4 sm:px-6">
            <p className="text-sm text-secondary/60 text-center sm:text-left max-w-sm">
                Manage your account below. You can log out of your current session or permanently delete your account.
                <br />
                <strong className="text-red-500/75">Note:</strong> Deleting your account will erase all associated data and cannot be undone.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full mt-4">
                <Button
                    variant="brick"
                    onClick={() => signOut({ redirectTo: '/' })}
                    className="w-full sm:w-auto flex-1"
                >
                    <PowerIcon className="w-4 h-4 mr-2" />
                    Logout
                </Button>
                <Button
                    variant="brick"
                    onClick={() => deleteAccount()}
                    disabled={isPending}
                    className="w-full sm:w-auto flex-1"
                >
                    {isPending ? (
                        <Loader className="h-4 w-4 animate-spin" />
                    ) : (
                        <>
                            <Trash className="w-4 h-4 mr-2" />
                            Delete Account
                        </>
                    )}
                </Button>
            </div>

        </div>
    );
};

export default AccountTab;
