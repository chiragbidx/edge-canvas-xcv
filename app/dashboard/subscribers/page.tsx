"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export default function SubscribersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Users className="w-6 h-6" />
          Subscribers
        </h1>
        <Button asChild>
          <Link href="#">
            Add Subscriber
          </Link>
        </Button>
      </div>
      <div className="rounded-lg bg-accent p-8 flex flex-col items-center text-center text-muted-foreground">
        <p className="text-xl mb-3">No subscribers yet.</p>
        <p className="mb-6">Add subscribers to your list to start building your audience.</p>
        <Button asChild size="lg">
          <Link href="#">Add Subscriber</Link>
        </Button>
      </div>
    </div>
  );
}