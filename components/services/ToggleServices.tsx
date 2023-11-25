import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from "next/image"

const ToggleServices = () => {
    return (
        <section className="mt-16">
            <Tabs defaultValue="apps" className="w-full">
                <TabsList className="grid w-full  grid-cols-8 gap-2 ">
                    <TabsTrigger value="apps" className="tabslist ">Apps</TabsTrigger>
                    <TabsTrigger value="apps-config" className="tabslist ">Apps Config</TabsTrigger>
                    <TabsTrigger value="pipelines" className="tabslist ">Pipelines</TabsTrigger>
                    <TabsTrigger value="infra-creation" className="tabslist ">Infra Creation</TabsTrigger>
                    <TabsTrigger value="cost" className="tabslist">Cost</TabsTrigger>
                    <TabsTrigger value="add-ons" className="tabslist">Add-ons</TabsTrigger>
                    <TabsTrigger value="monitoring" className="tabslist">Monitoring</TabsTrigger>
                    <TabsTrigger value="connections" className="tabslist ">Connections</TabsTrigger>
                </TabsList>
                <TabsContent value="apps" className="border-none">
                    <Card className="border-none mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full h-[700px] relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard.svg'} />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="apps-config" className="border-none">
                    <Card className="border-none mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full h-[700px] relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard-3.png'} className="object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="pipelines" className="border-none">
                    <Card className="border-none mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full h-[700px] relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard-1.png'} className="object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="infra-creation" className="border-none">
                    <Card className="border-none mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full h-[700px] relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard-2.png'} className="object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="cost" className="border-none">
                    <Card className="border-none mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full h-[700px] relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard-1.png'} className="object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="add-ons" className="border-none">
                    <Card className="border-none mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full h-[700px] relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard-2.png'} className="object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="monitoring" className="border-none">
                    <Card className="border-none mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full h-[700px] relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard-3.png'} className="object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="connections" className="border-none">
                    <Card className="border-none mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full h-[700px] relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard-2.png'} className="object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

            </Tabs>
        </section>
    )
}

export default ToggleServices