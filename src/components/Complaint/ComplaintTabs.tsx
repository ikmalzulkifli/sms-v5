"use client";

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { iTegurComplaints, ePBTComplaints, sisPAAComplaints } from "./mockData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Filter, Eye, MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterProps {
  assetId: string;
  status: string;
  dateRange: Date | undefined;
}

function ComplaintTable({ 
  data, 
  columns, 
  filters,
  onFilterChange 
}: { 
  data: any[];
  columns: { key: string; label: string }[];
  filters: FilterProps;
  onFilterChange: (key: string, value: any) => void;
}) {
  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
        <div className="flex gap-4 items-center">
          <Select
            value={filters.status}
            onValueChange={(value) => onFilterChange('status', value)}
          >
            <SelectTrigger className="w-[180px] bg-white dark:bg-gray-900">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="Filter by Asset ID"
            value={filters.assetId}
            onChange={(e) => onFilterChange('assetId', e.target.value)}
            className="max-w-[200px] bg-white dark:bg-gray-900"
          />

          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                className="w-[240px] justify-start text-left font-normal bg-white dark:bg-gray-900"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {filters.dateRange ? format(filters.dateRange, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={filters.dateRange}
                onSelect={(date) => onFilterChange('dateRange', date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg bg-white dark:bg-gray-900 shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 dark:bg-gray-800/50 border-none">
              {columns.map((column) => (
                <TableHead 
                  key={column.key}
                  className={cn(
                    "font-semibold text-xs uppercase text-gray-600 dark:text-gray-300",
                    (column.key === 'status' || column.key === 'priority') && "text-center"
                  )}
                >
                  {column.label}
                </TableHead>
              ))}
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow 
                key={index}
                className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors border-none"
              >
                {columns.map((column) => (
                  <TableCell 
                    key={column.key}
                    className={cn(
                      "font-medium text-sm",
                      (column.key === 'status' || column.key === 'priority') && "text-center"
                    )}
                  >
                    {renderCell(item, column.key)}
                  </TableCell>
                ))}
                <TableCell className="text-center">
                  <div className="flex justify-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/50"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="end"
                        className="bg-white dark:bg-gray-900"
                      >
                        <DropdownMenuItem className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/50 cursor-pointer">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/50 cursor-pointer">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Status
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/50 cursor-pointer">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function renderCell(item: any, key: string) {
  if (key === 'status') {
    return (
      <div className="flex justify-center">
        <Badge 
          className={cn(
            "px-2 py-1 text-xs font-semibold",
            getStatusStyles(item[key])
          )}
        >
          {item[key]}
        </Badge>
      </div>
    );
  }
  if (key === 'priority') {
    return (
      <div className="flex justify-center">
        <Badge 
          className={cn(
            "px-2 py-1 text-xs font-semibold",
            getPriorityStyles(item[key])
          )}
        >
          {item[key]}
        </Badge>
      </div>
    );
  }
  if (key === 'reporter') {
    return item.reporter?.name;
  }
  return item[key];
}

function getStatusStyles(status: string) {
  const styles = {
    "New": "bg-blue-500 text-white hover:bg-blue-600",
    "In Progress": "bg-amber-500 text-white hover:bg-amber-600",
    "Completed": "bg-green-500 text-white hover:bg-green-600",
    "Pending": "bg-purple-500 text-white hover:bg-purple-600",
    "Pending Approval": "bg-orange-500 text-white hover:bg-orange-600",
  };
  return styles[status as keyof typeof styles] || "bg-gray-500 text-white hover:bg-gray-600";
}

function getPriorityStyles(priority: string) {
  const styles = {
    "High": "bg-red-500 text-white hover:bg-red-600",
    "Medium": "bg-amber-500 text-white hover:bg-amber-600",
    "Low": "bg-green-500 text-white hover:bg-green-600",
  };
  return styles[priority as keyof typeof styles] || "bg-gray-500 text-white hover:bg-gray-600";
}

export default function ComplaintTabs() {
  const [filters, setFilters] = useState<FilterProps>({
    assetId: '',
    status: 'all',
    dateRange: undefined,
  });

  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filterData = (data: any[]) => {
    return data.filter(item => {
      const assetIdMatch = item.id.toLowerCase().includes(filters.assetId.toLowerCase());
      const statusMatch = filters.status === 'all' || item.status === filters.status;
      const dateMatch = !filters.dateRange || item.date === format(filters.dateRange, 'dd/MM/yyyy');
      return assetIdMatch && statusMatch && dateMatch;
    });
  };

  const iTegurColumns = [
    { key: 'id', label: 'WORK ORDER ID' },
    { key: 'date', label: 'DATE' },
    { key: 'location', label: 'LOCATION' },
    { key: 'category', label: 'DESCRIPTION' },
    { key: 'status', label: 'STATUS' },
    { key: 'priority', label: 'PRIORITY' },
    { key: 'reporter', label: 'ASSIGNED TEAM' },
  ];

  const ePBTColumns = [
    { key: 'id', label: 'WORK ORDER ID' },
    { key: 'date', label: 'DATE' },
    { key: 'location', label: 'LOCATION' },
    { key: 'type', label: 'DESCRIPTION' },
    { key: 'status', label: 'STATUS' },
    { key: 'priority', label: 'PRIORITY' },
    { key: 'assignedTo', label: 'ASSIGNED TEAM' },
  ];

  const sisPAAColumns = [
    { key: 'id', label: 'WORK ORDER ID' },
    { key: 'date', label: 'DATE' },
    { key: 'location', label: 'LOCATION' },
    { key: 'description', label: 'DESCRIPTION' },
    { key: 'status', label: 'STATUS' },
    { key: 'priority', label: 'PRIORITY' },
    { key: 'assignedContractor', label: 'ASSIGNED TEAM' },
  ];

  return (
    <Tabs defaultValue="itegur" className="space-y-4">
      <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
        <TabsTrigger value="itegur">i-Tegur</TabsTrigger>
        <TabsTrigger value="epbt">ePBT</TabsTrigger>
        <TabsTrigger value="sispaa">SiSPAA</TabsTrigger>
      </TabsList>

      <TabsContent value="itegur">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <ComplaintTable
              data={filterData(iTegurComplaints)}
              columns={iTegurColumns}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="epbt">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <ComplaintTable
              data={filterData(ePBTComplaints)}
              columns={ePBTColumns}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="sispaa">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <ComplaintTable
              data={filterData(sisPAAComplaints)}
              columns={sisPAAColumns}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
} 