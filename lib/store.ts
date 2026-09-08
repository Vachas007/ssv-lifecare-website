import { create } from 'zustand';
import { Product } from './products';

interface ProductStore {
  products: Product[];
  searchTerm: string;
  selectedCategory: string | null;
  selectedDosageForm: string | null;
  filteredProducts: Product[];
  setProducts: (products: Product[]) => void;
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: string | null) => void;
  setSelectedDosageForm: (form: string | null) => void;
  filterProducts: () => void;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  searchTerm: '',
  selectedCategory: null,
  selectedDosageForm: null,
  filteredProducts: [],
  setProducts: (products) => set({ products }),
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterProducts();
  },
  setSelectedCategory: (category) => {
    set({ selectedCategory: category });
    get().filterProducts();
  },
  setSelectedDosageForm: (form) => {
    set({ selectedDosageForm: form });
    get().filterProducts();
  },
  filterProducts: () => {
    const { products, searchTerm, selectedCategory, selectedDosageForm } = get();
    const filtered = products.filter((product) => {
      const matchesSearch =
        searchTerm === '' ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.composition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesDosageForm = !selectedDosageForm || product.dosageForm === selectedDosageForm;
      return matchesSearch && matchesCategory && matchesDosageForm;
    });
    set({ filteredProducts: filtered });
  },
  addProduct: (product) => {
    const { products } = get();
    set({ products: [...products, product] });
    get().filterProducts();
  },
  updateProduct: (id, updates) => {
    const { products } = get();
    set({
      products: products.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    });
    get().filterProducts();
  },
  deleteProduct: (id) => {
    const { products } = get();
    set({ products: products.filter((p) => p.id !== id) });
    get().filterProducts();
  },
}));