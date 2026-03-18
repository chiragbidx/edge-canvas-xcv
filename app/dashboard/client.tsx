"use client";

export default function Client({ greeting, firstName }: { greeting: string; firstName: string }) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-2">MailNest Dashboard</h1>
      <p className="text-muted-foreground">
        Welcome to MailNest! Start your first campaign or manage your subscribers to get going.
      </p>
    </div>
  );
}