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
                <div className="flex justify-center w-full">
                    <TabsList className="grid md:w-3/5  md:grid-cols-8 grid-cols-3 gap-2 h-auto">
                        <TabsTrigger value="apps" className="tabslist">Apps</TabsTrigger>
                        <TabsTrigger value="apps-config" className="tabslist  ">Apps Config</TabsTrigger>
                        <TabsTrigger value="pipelines" className="tabslist  ">Pipelines</TabsTrigger>
                        <TabsTrigger value="infra-creation" className="tabslist  ">Infra Creation</TabsTrigger>
                        <TabsTrigger value="cost" className="tabslist ">Cost</TabsTrigger>
                        <TabsTrigger value="add-ons" className="tabslist ">Add-ons</TabsTrigger>
                        <TabsTrigger value="monitoring" className="tabslist ">Monitoring</TabsTrigger>
                        <TabsTrigger value="connections" className="tabslist  ">Connections</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="apps" className="border-none mt-10">
                    <Card className="border-none md:mt-16  shadow-none ">
                        <CardContent className="space-y-2 ">
                            <div className="w-full md:h-[700px] h-40   relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard.svg'} className="md:object-cover object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="apps-config" className="border-none mt-10">
                    <Card className="border-none md:mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full md:h-[700px] h-40 relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard-2.svg'} className="object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="pipelines" className="border-none mt-10">
                    <Card className="border-none md:mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full md:h-[700px] h-40 relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard-2.svg'} className="object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="infra-creation" className="border-none mt-10">
                    <Card className="border-none md:mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full md:h-[700px] h-40 relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard-2.svg'} className="object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="cost" className="border-none mt-10">
                    <Card className="border-none md:mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full md:h-[700px] h-40 relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard-3.svg'} className="object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="add-ons" className="border-none mt-10">
                    <Card className="border-none md:mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full md:h-[700px] h-40 relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard-3.svg'} className="object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="monitoring" className="border-none mt-10">
                    <Card className="border-none md:mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full md:h-[700px] h-40 relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard-3.svg'} className="object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="connections" className="border-none mt-10">
                    <Card className="border-none md:mt-16 shadow-none">
                        <CardContent className="space-y-2">
                            <div className="w-full md:h-[700px] h-40 relative" >
                                <Image fill alt="dashboard" src={'/assets/landing/dashboard-2.svg'} className="object-contain" />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

            </Tabs>
        </section>
    )
}

export default ToggleServices