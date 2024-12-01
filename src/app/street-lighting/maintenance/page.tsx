"use client";

import { useState } from 'react';
import { Search, FileText, Bell, Filter, Wrench, Clock, AlertTriangle, CheckCircle2, HelpCircle, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { BarChart, LineChart } from '@/components/Charts';
import WorkOrderTable from './components/WorkOrderTable';
import AlertsPanel from './components/AlertsPanel';
import NotificationCenter from './components/NotificationCenter';
import { PreventiveAlerts } from './components/PreventiveAlerts';
import { PreventiveSchedule } from './components/PreventiveSchedule';
import { PreventiveTaskTable } from './components/PreventiveTaskTable';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function MaintenancePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'critical',
      message: 'High-priority corrective maintenance required for SL-123',
      time: '5 minutes ago'
    },
    {
      id: 2,
      type: 'warning',
      message: 'Preventive maintenance schedule updated for Zone A',
      time: '1 hour ago'
    }
  ]);

  // Mock data for maintenance KPIs
  const mtbfData = {
    data: [720, 648, 696, 744, 672, 816, 768], // Hours between failures
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    target: 700, // Target MTBF in hours
  };

  const maintenanceAdherenceData = {
    data: [92, 88, 94, 86, 95, 91, 93], // Percentage of scheduled maintenance completed
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    target: 90, // Target adherence percentage
  };

  const resolutionTimeData = {
    data: [6.5, 8.2, 5.4, 7.1, 4.8, 6.2, 5.8], // Hours to resolve issues
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    target: 6, // Target resolution time in hours
    categories: {
      critical: 4, // Target hours for critical issues
      major: 8,    // Target hours for major issues
      minor: 24    // Target hours for minor issues
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section with Search and Actions */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold">Maintenance Management</h1>
        
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search assets, work orders..."
              className="pl-8 w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Advanced Filters */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Advanced Filters</SheetTitle>
                <SheetDescription>
                  Customize your view with advanced filters
                </SheetDescription>
              </SheetHeader>
              {/* Add your filter controls here */}
            </SheetContent>
          </Sheet>

          {/* Report Generation */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                Corrective Maintenance Report
              </DropdownMenuItem>
              <DropdownMenuItem>
                Preventive Maintenance Report
              </DropdownMenuItem>
              <DropdownMenuItem>
                Combined Maintenance Report
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                {notifications.length > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center"
                    variant="destructive"
                  >
                    {notifications.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="end">
              {notifications.map((notification) => (
                <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-4">
                  <div className="flex items-center gap-2">
                    <Badge variant={notification.type === 'critical' ? 'destructive' : 'default'}>
                      {notification.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{notification.time}</span>
                  </div>
                  <p className="mt-1 text-sm">{notification.message}</p>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="corrective" className="flex items-center gap-2">
            <span className="relative">
              Corrective
              <Badge variant="destructive" className="absolute -top-3 -right-6 text-xs">15</Badge>
            </span>
          </TabsTrigger>
          <TabsTrigger value="preventive" className="flex items-center gap-2">
            <span className="relative">
              Preventive
              <Badge variant="warning" className="absolute -top-3 -right-6 text-xs">8</Badge>
            </span>
          </TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-gray-50 dark:bg-gray-800 border-l-4 border-l-blue-500">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Work Orders</CardTitle>
                <Wrench className="h-7 w-7 text-blue-500 mt-1 mr-1" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">245</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-blue-500">+2% from last month</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 dark:bg-gray-800 border-l-4 border-l-red-500">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Corrective</CardTitle>
                <AlertTriangle className="h-7 w-7 text-red-500 mt-1 mr-1" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">15</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500">3 high priority</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 dark:bg-gray-800 border-l-4 border-l-amber-500">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Overdue Preventive</CardTitle>
                <Clock className="h-7 w-7 text-amber-500 mt-1 mr-1" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">8</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-amber-500">5 due this week</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 dark:bg-gray-800 border-l-4 border-l-green-500">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Schedule Adherence</CardTitle>
                <CheckCircle2 className="h-7 w-7 text-green-500 mt-1 mr-1" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">89%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+5% from target</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* KPI Charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  MTBF Trend
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent className="p-4 max-w-xs">
                        <p className="font-semibold">Mean Time Between Failures</p>
                        <p className="mt-1">Average operational hours between street light failures. Target: 700 hours</p>
                        <p className="mt-2 text-sm text-muted-foreground">Higher values indicate better reliability</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <LineChart 
                  data={mtbfData.data}
                  labels={mtbfData.labels}
                  targetLine={mtbfData.target}
                  yAxisLabel="Hours"
                  tooltipPrefix="MTBF: "
                  tooltipSuffix=" hours"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  Maintenance Adherence
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent className="p-4 max-w-xs">
                        <p className="font-semibold">Maintenance Schedule Adherence</p>
                        <p className="mt-1">Percentage of preventive maintenance tasks completed on schedule. Target: 90%</p>
                        <p className="mt-2 text-sm text-muted-foreground">Includes routine inspections and lamp replacements</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <BarChart 
                  data={maintenanceAdherenceData.data}
                  labels={maintenanceAdherenceData.labels}
                  targetLine={maintenanceAdherenceData.target}
                  yAxisLabel="%"
                  tooltipPrefix="Adherence: "
                  tooltipSuffix="%"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  Resolution Time
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent className="p-4 max-w-xs">
                        <p className="font-semibold">Average Resolution Time</p>
                        <p className="mt-1">Time taken to resolve reported issues</p>
                        <div className="mt-2 space-y-1 text-sm">
                          <p>Critical Issues: {resolutionTimeData.categories.critical}h target</p>
                          <p>Major Issues: {resolutionTimeData.categories.major}h target</p>
                          <p>Minor Issues: {resolutionTimeData.categories.minor}h target</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <LineChart 
                  data={resolutionTimeData.data}
                  labels={resolutionTimeData.labels}
                  targetLine={resolutionTimeData.target}
                  yAxisLabel="Hours"
                  tooltipPrefix="Avg Time: "
                  tooltipSuffix=" hours"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Corrective Maintenance Tab */}
        <TabsContent value="corrective" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <AlertsPanel />
            </div>
            <div className="lg:col-span-2">
              <WorkOrderTable type="corrective" />
            </div>
          </div>
        </TabsContent>

        {/* Preventive Maintenance Tab */}
        <TabsContent value="preventive" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <PreventiveAlerts />
            </div>
            <div className="lg:col-span-2">
              <PreventiveSchedule />
              <div className="mt-6">
                <PreventiveTaskTable />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 