import  Card   from "../../ui/dashboard/cards"
import RevenueChart from "../../ui/dashboard/revenue-chart"
import { Lusitana } from "next/font/google"
import LatestInvoices from "../../ui/dashboard/latest-invoices"
import {  fetchCardData } from "../../lib/data"
import { Suspense } from "react"
import { RevenueChartSkeleton ,LatestInvoicesSkeleton , CardSkeleton } from "@/app/ui/skeletons"

export default async function Page(){
    
    
    const {totalPaidInvoices , totalPendingInvoices , numberOfInvoices ,numberOfCustomers} = await fetchCardData()
    return (

        <main>
            <h1 className= " mb-4 text-xl"
            > Dashboard</h1>
            <div>
                <Suspense fallback = { <CardSkeleton />}>
                    <Card />
                </Suspense>
                
            </div>
            
            
            <div className= "mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback = {<RevenueChartSkeleton />} >
                   <RevenueChart /> 
                </Suspense>
                
                
                <Suspense fallback = {<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    


)
}