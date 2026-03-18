"use client";

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-3">MailNest Dashboard</h1>
        <p className="text-muted-foreground mb-4">
          Welcome to MailNest! Start your first campaign or manage your subscribers to get going.
        </p>
        <div className="rounded-lg bg-accent p-6 text-center text-muted-foreground">
          <span className="font-medium">
            Get a quick summary of your recent campaigns and subscriber growth.
          </span>
        </div>
      </div>
    </div>
  );
}