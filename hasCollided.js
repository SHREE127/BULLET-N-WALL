function hasCollided(object1,object2){

    object1LeftEdge= object1.x + object1.width;
    object2RightEdge= object2.x;

    if(object1LeftEdge>=object2RightEdge){
        return true
    }
    else{
        return false
    }
}