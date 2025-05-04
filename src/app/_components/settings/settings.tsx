import { SettingsIcon } from 'lucide-react'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import { Separator } from '~/components/ui/separator'
import SettingTabs from './tabs'

const Settings = () => {
    return (
        <div >
            <Dialog>
                <DialogTrigger className='hover:rotate-45 transition-all duration-200'>
                    <SettingsIcon />
                </DialogTrigger>
                <DialogContent className='bg-neutral-950 text-secondary/50 border border-neutral-700'>
                    <DialogHeader>
                        <DialogTitle>Settings</DialogTitle>
                        <Separator className='bg-neutral-700' />
                            <SettingTabs />
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Settings
