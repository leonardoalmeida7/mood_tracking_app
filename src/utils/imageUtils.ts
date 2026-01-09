// Utilitário para construir URLs de imagem de forma consistente

// Base URL do servidor
const API_BASE_URL = 'https://moodtrackingapp-backend-production.up.railway.app';

export const getProfileImageUrl = (profileImage?: string | null, placeholder?: string): string => {
  // Se não há imagem ou é uma string vazia, retorna placeholder
  if (!profileImage || profileImage.trim() === '') {
    return placeholder || '';
  }
  
  // Se é uma URL completa (http/https), retorna como está
  if (profileImage.startsWith('http://') || profileImage.startsWith('https://')) {
    return profileImage;
  }
  
  // Se é uma imagem base64, retorna como está
  if (profileImage.startsWith('data:image/')) {
    return profileImage;
  }
  
  // Se é um caminho do servidor começando com /uploads/, constrói a URL completa
  if (profileImage.startsWith('/uploads/')) {
    return `${API_BASE_URL}${profileImage}`;
  }
  
  // Se é apenas o nome do arquivo, adiciona o path completo
  if (!profileImage.includes('/')) {
    return `${API_BASE_URL}/uploads/${profileImage}`;
  }
  
  // Fallback: retorna o placeholder
  return placeholder || '';
};