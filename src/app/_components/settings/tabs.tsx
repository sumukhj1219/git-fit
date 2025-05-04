import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import React from "react";
import AccountTab from "./settings-tabs/account-tab";
import ApiTab from "./settings-tabs/api-tab";

const SettingTabs = () => {
    return (
        <div className="w-full px-4 sm:px-6 max-w-4xl mx-auto mt-8">
            <Tabs defaultValue="account" className="w-full">
                <TabsList className="flex bg-neutral-800 rounded-full p-1 w-full max-w-xs mx-auto mb-4">
                    <TabsTrigger
                        value="account"
                        className="flex-1 px-4 py-2 text-sm font-medium data-[state=active]:bg-white/10 rounded-full transition"
                    >
                        Account
                    </TabsTrigger>
                    <TabsTrigger
                        value="api"
                        className="flex-1 px-4 py-2 text-sm font-medium data-[state=active]:bg-white/10 rounded-full transition"
                    >
                        API Keys
                    </TabsTrigger>
                </TabsList>

                <div className="pt-6">
                    <TabsContent value="account">
                        <AccountTab />
                    </TabsContent>
                    <TabsContent value="api">
                        <ApiTab />
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
};

export default SettingTabs;
