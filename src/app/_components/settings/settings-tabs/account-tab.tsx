import { Loader, PowerIcon, Trash } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'
import { Button } from '~/components/ui/button'
import { api } from '~/trpc/react'

const AccountTab = () => {
    const { mutate: deleteAccount, isPending } = api.user.deleteAccount.useMutation({
        onSuccess:()=>{
            redirect("/")
        }
    })

    return (
        <div className='flex flex-col items-center justify-center space-y-6'>
            <p className="text-sm text-secondary/60 text-left max-w-sm">
                Manage your account below. You can log out of your current session or permanently delete your account.
                <br />
                <strong className="text-red-500/75">Note:</strong> Deleting your account will erase all associated data and cannot be undone.
            </p>

            <div className='flex items-center justify-between gap-6'>
                <Button
                    variant="brick"
                    size="sm"
                    onClick={() => signOut({ redirectTo: '/' })}
                    className='flex items-center gap-2 border border-neutral-700 hover:bg-red-500/10'
                >
                    <PowerIcon className='w-4 h-4' />
                    Logout
                </Button>

                <Button
                    variant="brick"
                    size="sm"
                    onClick={() => deleteAccount()}
                    disabled={isPending}
                    className='flex items-center gap-2 border border-neutral-700 hover:bg-red-500/10 '
                >
                    {isPending ? (
                        <>
                            <Loader className='h-4 w-4 animate-spin' />
                        </>
                    ) : (
                        <>
                            <Trash className='w-4 h-4' />
                            Delete Account
                        </>
                    )}
                </Button>
            </div>
        </div>
    )
}

export default AccountTab
