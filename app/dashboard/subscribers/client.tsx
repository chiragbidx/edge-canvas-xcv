"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export default function SubscribersClient() {
  return (
    <div className="rounded-lg bg-background/90 p-8 shadow-sm text-center">
      <h2 className="text-xl font-semibold flex items-center justify-center gap-2 mb-4">
        <Users className="w-5 h-5" />
        Your Subscribers
      </h2>
      <p className="text-muted-foreground mb-4">
        Your subscriber list is empty. Add subscribers to start building your audience.
      </p>
      <Button asChild>
        <Link href="#">Add Subscriber</Link>
      </Button>
    </div>
  );
}