import React, { lazy, Suspense } from "react"
import { lazyVueInReact } from '../vuereact-combined'
const Home = lazy(() => import("../views/Home"))
const VueInReact1 = lazy(() => import("../demo/VueInReact1"))
const VueInReact2 = lazy(() => import("../demo/VueInReact2"))
const EleInReact = lazy(() => import("../demo/EleInReact"))
const HelloWorld = lazy(() => import("../demo/demo1"))
//懒加载vue组件
const TestVue = lazyVueInReact(()=>import("../vue_app/test1.vue"))


export default [
    {
        path: "/",
        exact: true,
        component: () => {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <Home/>
                </Suspense>
            );
        }
    },
    {
        path: "/vueInReact1",
        exact: true,
        component: () => {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <VueInReact1/>
                </Suspense>
            );
        }
    },
    {
        path: "/vueInReact2",
        exact: true,
        component: () => {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <VueInReact2/>
                </Suspense>
            );
        }
    },
    {
        path: "/eleInReact",
        exact: true,
        component: () => {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <EleInReact/>
                </Suspense>
            );
        }
    },
    {
        path: "/helloworld",
        exact: true,
        component: () => {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <HelloWorld wrappedComponentRef={(ref)=>{console.log(111111,ref)}}/>
                </Suspense>
            );
        }
    }
];
