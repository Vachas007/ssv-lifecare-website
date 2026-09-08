'use client';

import { useState } from 'react';
import { initialProducts, Product, PRODUCT_CATEGORIES, DOSAGE_FORMS } from '@/lib/products';
import { Trash2, Edit, Plus, Download, Upload } from 'lucide-react';

interface EditingProduct extends Partial<Product> {
  id?: string;
}

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<EditingProduct>({
    name: '',
    composition: '',
    category: '',
    therapeuticSegment: '',
    dosageForm: '',
  });
  const [filter, setFilter] = useState('');

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase()) ||
    p.composition.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddProduct = () => {
    setEditingId(null);
    setFormData({
      name: '',
      composition: '',
      category: '',
      therapeuticSegment: '',
      dosageForm: '',
    });
    setShowForm(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingId(product.id);
    setFormData(product);
    setShowForm(true);
  };

  const handleSaveProduct = () => {
    if (!formData.name || !formData.composition || !formData.category || !formData.dosageForm) {
      alert('Please fill all required fields');
      return;
    }

    if (editingId) {
      setProducts(products.map((p) => (p.id === editingId ? { ...formData as Product } : p)));
    } else {
      const newProduct: Product = {
        id: formData.name?.toLowerCase().replace(/\s+/g, '-') || '',
        name: formData.name || '',
        composition: formData.composition || '',
        category: formData.category || '',
        therapeuticSegment: formData.therapeuticSegment || '',
        dosageForm: formData.dosageForm || '',
        active: true,
      };
      setProducts([...products, newProduct]);
    }

    setShowForm(false);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-white/90">Manage SSV LIFECARE products</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-semibold">Total Products</p>
            <p className="text-3xl font-bold text-primary-600">{products.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-semibold">Active Products</p>
            <p className="text-3xl font-bold text-green-600">{products.filter((p) => p.active).length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-semibold">Categories</p>
            <p className="text-3xl font-bold text-blue-600">{new Set(products.map((p) => p.category)).size}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-semibold">Featured</p>
            <p className="text-3xl font-bold text-secondary-600">{products.filter((p) => p.featured).length}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Upload size={18} />
                Bulk Import
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download size={18} />
                Export
              </button>
              <button
                onClick={handleAddProduct}
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Plus size={18} />
                Add Product
              </button>
            </div>
          </div>
        </div>

        {/* Product Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-96 overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-primary-700">
                  {editingId ? 'Edit Product' : 'Add New Product'}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Product Name *</label>
                    <input
                      type="text"
                      value={formData.name || ''}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="e.g., ACEVAR-P"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Category *</label>
                    <select
                      value={formData.category || ''}
                      onChange={(e) => handleFormChange('category', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    >
                      <option value="">Select category</option>
                      {PRODUCT_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">Composition *</label>
                    <textarea
                      value={formData.composition || ''}
                      onChange={(e) => handleFormChange('composition', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg h-24 resize-none"
                      placeholder="e.g., Aceclofenac 100 mg + Paracetamol 325 mg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Dosage Form *</label>
                    <select
                      value={formData.dosageForm || ''}
                      onChange={(e) => handleFormChange('dosageForm', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    >
                      <option value="">Select dosage form</option>
                      {DOSAGE_FORMS.map((form) => (
                        <option key={form} value={form}>
                          {form}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Therapeutic Segment</label>
                    <input
                      type="text"
                      value={formData.therapeuticSegment || ''}
                      onChange={(e) => handleFormChange('therapeuticSegment', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="e.g., Anti-inflammatory"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Strength</label>
                    <input
                      type="text"
                      value={formData.strength || ''}
                      onChange={(e) => handleFormChange('strength', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="e.g., 500 mg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Pack Size</label>
                    <input
                      type="text"
                      value={formData.packSize || ''}
                      onChange={(e) => handleFormChange('packSize', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="e.g., Strip of 10"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.featured || false}
                        onChange={(e) => handleFormChange('featured', e.target.checked ? 'true' : 'false')}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-semibold">Featured Product</span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={handleSaveProduct}
                    className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                  >
                    Save Product
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Product Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Dosage Form</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-semibold text-primary-700">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.dosageForm}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.active
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {product.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2 flex justify-end">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
