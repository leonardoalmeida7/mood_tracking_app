// Utilitário para parsear feelings de forma segura
export const parseFeelings = (feelings: string | string[]): string[] => {
  // Se já é um array, retorna diretamente
  if (Array.isArray(feelings)) {
    return feelings;
  }
  
  // Se é uma string
  if (typeof feelings === 'string') {
    try {
      // Tenta parsear como JSON
      const parsed = JSON.parse(feelings);
      if (Array.isArray(parsed)) {
        return parsed;
      }
      // Se não é array após parse, retorna array vazio
      return [];
    } catch (error) {
      // Se falhar o parse JSON, trata como string separada por vírgula
      return feelings.split(',').map(feeling => feeling.trim()).filter(feeling => feeling.length > 0);
    }
  }
  
  // Fallback para casos inesperados
  return [];
};