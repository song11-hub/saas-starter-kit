"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SettingsForm({ currentName, currentEmail }: { currentName: string; currentEmail: string }) {
  const [name, setName] = useState(currentName);
  const [saved, setSaved] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (res.ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input id="email" label="Email" value={currentEmail} disabled />
      <Input id="name" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <div className="flex items-center gap-4">
        <Button type="submit">Save changes</Button>
        {saved && <span className="text-sm text-green-600">Saved!</span>}
      </div>
    </form>
  );
}
