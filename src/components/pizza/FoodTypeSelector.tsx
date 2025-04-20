
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Pizza, Coffee, Utensils } from 'lucide-react';
import { FoodItem } from '@/data/pizza-data';

interface FoodTypeSelectorProps {
  selectedFoodType: string;
  onSelectFoodType: (foodType: string) => void;
  pizzas: FoodItem[];
  burgers: FoodItem[];
  sides: FoodItem[];
  drinks: FoodItem[];
  onSelectFood: (food: FoodItem) => void;
}

const FoodTypeSelector: React.FC<FoodTypeSelectorProps> = ({
  selectedFoodType,
  onSelectFoodType,
  pizzas,
  burgers,
  sides,
  drinks,
  onSelectFood
}) => {
  return (
    <Tabs 
      value={selectedFoodType} 
      onValueChange={onSelectFoodType}
      className="w-full"
    >
      <TabsList className="grid grid-cols-4 mb-6">
        <TabsTrigger value="pizza" className="flex items-center gap-2">
          <Pizza className="h-4 w-4" />
          <span className="hidden sm:inline">Pizzas</span>
        </TabsTrigger>
        <TabsTrigger value="burger" className="flex items-center gap-2">
          {/* Replace Burger with a different icon */}
          <Utensils className="h-4 w-4" />
          <span className="hidden sm:inline">Hamburguesas</span>
        </TabsTrigger>
        <TabsTrigger value="side" className="flex items-center gap-2">
          <Utensils className="h-4 w-4" />
          <span className="hidden sm:inline">Complementos</span>
        </TabsTrigger>
        <TabsTrigger value="drink" className="flex items-center gap-2">
          <Coffee className="h-4 w-4" />
          <span className="hidden sm:inline">Bebidas</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="pizza" className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {pizzas.map(pizza => (
            <FoodCard key={pizza.id} food={pizza} onClick={() => onSelectFood(pizza)} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="burger" className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {burgers.map(burger => (
            <FoodCard key={burger.id} food={burger} onClick={() => onSelectFood(burger)} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="side" className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {sides.map(side => (
            <FoodCard key={side.id} food={side} onClick={() => onSelectFood(side)} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="drink" className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {drinks.map(drink => (
            <FoodCard key={drink.id} food={drink} onClick={() => onSelectFood(drink)} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

interface FoodCardProps {
  food: FoodItem;
  onClick: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ food, onClick }) => {
  return (
    <div 
      className="border rounded-lg overflow-hidden hover:shadow-md transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="h-36 overflow-hidden">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <div className="font-medium">{food.name}</div>
        <div className="text-xs text-gray-500 line-clamp-2 h-8">{food.description}</div>
        <div className="flex justify-between items-center mt-2">
          <div className="font-bold">{food.price.toFixed(2)}€</div>
          <div className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
            +{food.points} pts
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodTypeSelector;
