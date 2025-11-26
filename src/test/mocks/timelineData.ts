import { EventType } from '@/types/event';

/**
 * Mock timeline data for Spanish language
 * Subset of actual data from public/data/timeline_es.json for testing
 */
export const mockTimelineDataEs: EventType[] = [
  {
    fullTimestamp: '2025-04-28T00:00:00.000+02:00',
    date: '28/04/2025',
    startTime: '00:00:00.000',
    endTime: '05:59:59.999',
    title: 'Sistema estable - Operación nocturna',
    events: ['Tensiones con variabilidad normal (<5 kV)', 'Valores típicos de operación nocturna']
  },
  {
    fullTimestamp: '2025-04-28T06:00:00.000+02:00',
    date: '28/04/2025',
    startTime: '06:00:00.000',
    endTime: '06:00:00.000',
    title: 'Cambio programado en interconexión con Francia',
    events: [
      'Reducción de exportación de 2.590 MW a 1.600 MW',
      'Reducción total: 990 MW',
      'Se detectan variaciones de tensión en todos los nudos piloto de 400 kV'
    ]
  },
  {
    fullTimestamp: '2025-04-28T12:03:00.000+02:00',
    date: '28/04/2025',
    startTime: '12:03:00.000',
    endTime: '12:07:42.000',
    title: 'PRIMERA OSCILACIÓN MAYOR',
    events: [
      'Frecuencia: 0,6 Hz (atípicamente alta)',
      'Amplitud: 70 mHz',
      'Duración total: 4 minutos 42 segundos'
    ]
  }
];

/**
 * Mock timeline data for English language
 * Subset of actual data from public/data/timeline_en.json for testing
 */
export const mockTimelineDataEn: EventType[] = [
  {
    fullTimestamp: '2025-04-28T00:00:00.000+02:00',
    date: '28/04/2025',
    startTime: '00:00:00.000',
    endTime: '05:59:59.999',
    title: 'Stable system - Night operation',
    events: ['Voltages with normal variability (<5 kV)', 'Typical night operation values']
  },
  {
    fullTimestamp: '2025-04-28T06:00:00.000+02:00',
    date: '28/04/2025',
    startTime: '06:00:00.000',
    endTime: '06:00:00.000',
    title: 'Scheduled change in France interconnection',
    events: [
      'Reduction of export from 2,590 MW to 1,600 MW',
      'Total reduction: 990 MW',
      'Voltage variations detected at all 400 kV pilot nodes'
    ]
  },
  {
    fullTimestamp: '2025-04-28T12:03:00.000+02:00',
    date: '28/04/2025',
    startTime: '12:03:00.000',
    endTime: '12:07:42.000',
    title: 'FIRST MAJOR OSCILLATION',
    events: [
      'Frequency: 0.6 Hz (unusually high)',
      'Amplitude: 70 mHz',
      'Total duration: 4 minutes 42 seconds'
    ]
  }
];

/**
 * Get mock timeline data by language
 * @param language - Language code ('es' or 'en')
 * @returns Mock timeline data in the specified language
 */
export function getMockTimelineData(language: 'es' | 'en'): EventType[] {
  return language === 'es' ? mockTimelineDataEs : mockTimelineDataEn;
}
