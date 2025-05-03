import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"

import React from 'react'
import AccountTab from "./settings-tabs/account-tab"

const SettingTabs = () => {
    return (
        <div>
            <Tabs defaultValue="account" className="w-full">
                <TabsList className="bg-neutral-700/50 w-full">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <AccountTab />
                </TabsContent>
                <TabsContent value="billing">Change your password here.</TabsContent>
            </Tabs>
        </div>
    )
}

export default SettingTabs

