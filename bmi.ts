export function calculateBMI(weight: number, height: number): number {
    return weight / (height * height);
  }
  
  export enum BMICategories {
    Underweight = 'Underweight',
    Normal = 'Normal',
    Overweight = 'Overweight',
    Obesity = 'Obesity',
  }
  