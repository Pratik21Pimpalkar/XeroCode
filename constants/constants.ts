export const xeroData = [
    {
        id: "01",
        title: "Self serve Infrastructure",
        desc: " Accelerate by self-serving production-ready infrastructure and customize as you scale.",
        data: [
            {
                rightImg: true,
                isTabs: true,
                tablist: ["Your Cloud", "Infra Components", "Self Hosted Apps"],
                imageSrc: "/assets/landing/s1.svg",
                title: "In Your Cloud",
                desc: "Your infrastructure runs on your AWS or GCP account. Never get locked in. Infinitely scalable.Azure support coming soon"
            }
        ]
    },
    {
        id: "02",
        title: "Deploy applications, fast!",
        desc: "Set up automated deployments of your application in 5 minutes and get back to building stuff that matters.",
        data: [
            {
                isTabs: false, rightImg: true,
                imageSrc: "/assets/landing/pipeline.png",
                title: "Configurable Build and Deploy pipelines",
                desc: "Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages."
            },
            {
                isTabs: false,
                imageSrc: "/assets/landing/deploy.png",
                title: "Push to Deploy",
                desc: "Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push."
            },
            {
                isTabs: false,rightImg: true,
                imageSrc: "/assets/landing/tools.png",
                title: "Multiple runtimes",
                desc: "Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions."
            },
            {
                isTabs: false, rightImg: false,
                imageSrc: "/assets/landing/scale.png",
                title: "Scale infinitely",
                desc: "Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime."
            },
        ]
    },
    {
        id: "03",
        title: "Visibility into costs and metrics",
        desc: "Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory.",
        data: [
            {
                isTabs: false, rightImg: true,
                imageSrc: "/assets/landing/cost.png",
                title: "Customizable cost dashboards and reports",
                desc: "Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions."
            },
            {
                isTabs: false,
                imageSrc: "/assets/landing/preview.png",
                title: "Preview infra costs",
                desc: "See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools."
            },
            {
                isTabs: false,rightImg: true,
                imageSrc: "/assets/landing/observability.svg",
                title: "Observability from day one",
                desc: "Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1."
            },
        ]
    }
]