import Layout from "../components/layout/Layout";

import HeroSection
from "../components/dashboard/HeroSection";

import QuickActions
from "../components/dashboard/QuickActions";

import CentralSchemes
from "../components/dashboard/CentralSchemes";

import StateSchemes
from "../components/dashboard/StateSchemes";

import StatsCards from "../components/dashboard/StatsCards";

import RecentSearches from "../components/dashboard/RecentSearches";

import Recommendations from "../components/dashboard/Recommendations";

import ActivityFeed from "../components/dashboard/ActivityFeed";

export default function Dashboard() {

    return (

        <Layout>

            <div className="
                space-y-10
            ">

                <HeroSection />

                <StatsCards />

                <QuickActions />

                <CentralSchemes />

                <StateSchemes />

                <Recommendations />

                <RecentSearches />

                <ActivityFeed />

            </div>

        </Layout>

    );
}