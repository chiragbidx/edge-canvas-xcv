"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function CampaignsClient() {
  return (
    <div className="rounded-lg bg-background/90 p-8 shadow-sm text-center">
      <h2 className="text-xl font-semibold flex items-center justify-center gap-2 mb-4">
        <Mail className="w-5 h-5" />
        Your Campaigns
      </h2>
      <p className="text-muted-foreground mb-4">
        No campaigns yet. Create your first email campaign to reach your audience.
      </p>
      <Button asChild>
        <Link href="/dashboard/campaigns/new">New Campaign</Link>
      </Button>
    </div>
  );
}