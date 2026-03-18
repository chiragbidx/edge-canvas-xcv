"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function CampaignsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Mail className="w-6 h-6" />
          Campaigns
        </h1>
        <Button asChild>
          <Link href="/dashboard/campaigns/new">
            New Campaign
          </Link>
        </Button>
      </div>
      <div className="rounded-lg bg-accent p-8 flex flex-col items-center text-center text-muted-foreground">
        <p className="text-xl mb-3">No campaigns yet.</p>
        <p className="mb-6">Start by creating a new campaign to reach your audience.</p>
        <Button asChild size="lg">
          <Link href="/dashboard/campaigns/new">New Campaign</Link>
        </Button>
      </div>
    </div>
  );
}