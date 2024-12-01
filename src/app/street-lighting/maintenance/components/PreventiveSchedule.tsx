"use client";

import { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MaintenanceTask {
  id: string;
  assetId: string;
  description: string;
  scheduledDate: Date;
  assignedTeam: string;
  status: 'scheduled' | 'in-progress' | 'completed';
}

export function PreventiveSchedule() {
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const tasks: MaintenanceTask[] = [
    {
      id: 'PT-001',
      assetId: 'SL-123',
      description: 'Monthly Cleaning',
      scheduledDate: new Date('2024-03-25'),
      assignedTeam: 'Team A',
      status: 'scheduled',
    },
    // Add more tasks
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Maintenance Schedule</CardTitle>
        <div className="flex gap-4">
          <Select value={viewMode} onValueChange={(v: 'calendar' | 'list') => setViewMode(v)}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="View mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="calendar">Calendar</SelectItem>
              <SelectItem value="list">List</SelectItem>
            </SelectContent>
          </Select>
          <Button>Add New Task</Button>
        </div>
      </CardHeader>
      <CardContent>
        {viewMode === 'calendar' ? (
          <div className="rounded-md border">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md"
              modifiers={{
                scheduled: tasks
                  .filter(task => task.status === 'scheduled')
                  .map(task => task.scheduledDate),
                completed: tasks
                  .filter(task => task.status === 'completed')
                  .map(task => task.scheduledDate),
                overdue: tasks
                  .filter(task => 
                    task.status !== 'completed' && 
                    task.scheduledDate < new Date()
                  )
                  .map(task => task.scheduledDate),
              }}
              modifiersStyles={{
                scheduled: { backgroundColor: '#93c5fd' },
                completed: { backgroundColor: '#86efac' },
                overdue: { backgroundColor: '#fca5a5' },
              }}
            />
          </div>
        ) : (
          <div className="space-y-4">
            {tasks.map(task => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div>
                  <h4 className="font-semibold">{task.assetId}</h4>
                  <p className="text-sm text-muted-foreground">{task.description}</p>
                </div>
                <div className="text-sm text-right">
                  <p>{task.scheduledDate.toLocaleDateString()}</p>
                  <p className="text-muted-foreground">{task.assignedTeam}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
} 