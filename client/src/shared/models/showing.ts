export type Dimensionality = '2D' | '3D';

export type DialoguesType = 'subtitles' | 'dubbing';

export interface Showing {
  time: string;
  cinema: string;
  subtitles: boolean;
  dimensionality: Dimensionality;
  dubbing: boolean;
  url: string;
}
