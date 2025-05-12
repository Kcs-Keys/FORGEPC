export type ComponentType = 
  | 'cpu' 
  | 'motherboard' 
  | 'ram' 
  | 'gpu' 
  | 'storage' 
  | 'psu' 
  | 'case'
  | 'cooling';

export interface Component {
  id: string;
  name: string;
  type: ComponentType;
  brand: string;
  price: number;
  image: string;
  description: string;
  specs: Record<string, string | number | boolean>;
  compatibility: {
    socketType?: string;
    formFactor?: string;
    chipset?: string;
    memoryType?: string;
    tdp?: number;
    wattage?: number;
    maxGpuLength?: number;
    compatible?: {
      with: ComponentType;
      conditions: Record<string, string | number | boolean>;
    }[];
  };
  explanation: {
    what: string;
    purpose: string;
    howToChoose: string;
  };
  performanceRating: {
    gaming?: number;
    productivity?: number;
    content?: number;
  };
}

export type BuildPurpose = 'gaming' | 'productivity' | 'content-creation' | 'general';

export interface CompatibilityIssue {
  componentType: ComponentType;
  severity: 'error' | 'warning';
  message: string;
}

export interface UserPreference {
  budget: number;
  purpose: BuildPurpose;
  prioritizePerformance: boolean;
}