"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PencilLine } from "lucide-react";

export default function NewCampaignPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <PencilLine className="w-6 h-6" />
        <h1 className="text-3xl font-bold">Create Campaign</h1>
      </div>
      <div className="rounded-lg bg-accent p-8 flex flex-col items-center text-center text-muted-foreground">
        <p className="text-xl mb-3">Set up your campaign details and design your email to get started.</p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/dashboard/campaigns">Back to Campaigns</Link>
        </Button>
      </div>
    </div>
  );
}