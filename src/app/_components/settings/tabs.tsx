import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"

import React from 'react'
import AccountTab from "./settings-tabs/account-tab"
import ApiTab from "./settings-tabs/api-tab"

const SettingTabs = () => {
    return (
        <div>
            <Tabs defaultValue="account" className="w-full">
                <TabsList className="bg-neutral-700/50 w-full">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    {/* <TabsTrigger value="billing">Billing</TabsTrigger> */}
                    <TabsTrigger value="api">Api Keys</TabsTrigger>

                </TabsList>
                <TabsContent value="account">
                    <AccountTab />
                </TabsContent>
                {/* <TabsContent value="billing"></TabsContent> */}
                <TabsContent value="api">
                    <ApiTab />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default SettingTabs

