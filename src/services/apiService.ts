// src/services/apiService.ts
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Interfaccia per la risposta della struttura /todos
export interface DeveloperTask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

/**
 * Recupera le ultime attività o task simulate dall'API esterna.
 * @returns Promise<DeveloperTask[]> Array di task
 */
export const getDeveloperStats = async (): Promise<DeveloperTask[]> => {
  try {
    // Specifichiamo il tipo di dato atteso dalla chiamata Axios <DeveloperTask[]>
    const response = await axios.get<DeveloperTask[]>(`${API_BASE_URL}/todos?_limit=5`);
    return response.data;
  } catch (error) {
    console.error("Errore nel recupero dei dati API:", error);
    throw error;
  }
};