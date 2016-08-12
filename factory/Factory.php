<?php
interface Product{
    public function GetName();
}
 
class ConcreteProductA implements Product{
    public function GetName() { return "ProductA"; }
} 
 
class ConcreteProductB implements Product{
    public function GetName() { return "ProductB"; }
}
 
interface Creator{
    public function FactoryMethod();
} 
 
class ConcreteCreatorA implements Creator{
    public function FactoryMethod() { return new ConcreteProductA(); }
}

class ConcreteCreatorB implements Creator{
    public function FactoryMethod() { return new ConcreteProductB(); }
}

// An array of creators
$creators = array( new ConcreteCreatorA(), new ConcreteCreatorB() );
// Iterate over creators and create products
for($i = 0; $i < count($creators); $i++){
    $products[] = $creators[$i]->FactoryMethod()->getName();
}
 
header("content-type:text/plain");
echo var_export($products);
 
?>
