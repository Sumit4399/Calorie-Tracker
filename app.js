// //strorage controller



// //item controller
// const ItemCtrl= (function(){
//     //item constructer
//    const Item =function(id, name, calories){
//     this.id=id;
//     this.name=name;
//     this.calories=calories;
// }

// //data structure/state
// const data={
//     items: [
//         {id:0, name:'Streak Dinner', calories:1200},
//         {id:1, name:'Cookie', calories:400},
//         {id:2, name:'Eggs', calories:200},
//     ],
//     currentItem: null,
//     totalCalories:0
// }
//  //public methods
// return {
//     getItems: function(){
//         return data.items;
//     },
//     addItem: function(name, calories){
//         let ID;
//         //create ID
//         if(data.items.length>0){
//             ID= data.items[data.items.length-1].id+ 1;
//         } else{
//             ID=0;
//         }

//         //calories to number
//         calories= parseInt(calories);

//         //create new item
//         newItem= new Item(ID, name, calories);

//         //add to items array
//         data.items.push(newItem);

//         return newItem;
//     },
//     logData: function(){
//         return data;
//     }
// }
// })();




// //ui controller
// const UICtrl= (function(ItemCtrl, UICtrl){
//     const UISelectors={
//         itemList: '#item-list',
//         addBtn: '.add-btn',
//         itemNameInput:'#item-name',
//         itemCalorieInput:'#item-calories'
//     }

//     //public methods
//     return{
//        populateItemList: function(items){
//            let html='';

//            items.forEach(function(item){
//                html+= `
//                <li class="collection-item" id="item-${item.id}">
//                 <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
//                 <a href="#" class="secondary-content">
//                     <i class="edit-item fa fa-pencil"></i>
//                 </a>
//             </li>`;
//            });

//            //insert list items
//            document.querySelector(UISelectors.itemList).innerHTML=html;
//        },
//        getItemInput:function(){
//            return{
//                name:document.querySelector(UISelectors.itemNameInput).value,
//                calories:document.querySelector(UISelectors.itemCaloriesInput).value
//             }
//        },
//        getSelectors: function(){
//            return UISelectors;
//        }
//     }

// })();




// //app controller
// const App= (function(ItemCtrl, UICtrl){
//     //load event listeners
//     const loadEventListeners= function(){
//         //get UI seleectors
//         const UISelectors= UICtrl.getSelectors();

//         //add item event
//         document.querySelector(UISelectors.addBtn).addEventListener
//         ('click', itemAddSubmit);
//     }

//     // add item submit
//     const itemAddSubmit= function(e){
//         //get form input from UI controller
//         const input = UICtrl.getItemInput();
         
//         //check for name and calories input
//         if(input.name !=='' && input.calories !==''){
//             //add item
//             const newItem= ItemCtrl.addItem(input.name, input.calories);
//         }
//         e.preventDefault();
//     }

//     //public methods
//    return{
//        init: function(){
//            //fetch items from data structure
//            const items= ItemCtrl.getItems();

//            //populate list with items
//            UICtrl.populateItemList(items);

//            //load event listeners
//            loadEventListeners();
//        }
//    }
// })(ItemCtrl, UICtrl);

// //initialize app
// App.init();





// Storage Controller


// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      // {id: 0, name: 'Steak Dinner', calories: 1200},
      // {id: 1, name: 'Cookie', calories: 400},
      // {id: 2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      let ID;
      // Create ID
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    getItemsById: function(id){
       let found= null;
       //loop thorugh items
       data.items.forEach(function(item){
         if(item.id=== id){
           found= item;
         }
       });
       return found;
    },
    setCurrentItem: function(item){
      data.currentItem= item;
    },
    getCurrentItem: function(){
      return data.currentItem;
    },
    getTotalCalories: function(){
      let total=0;

      //loop through items and add items
      data.items.forEach(function(item){
        total +=item.calories;
      });

      // set total cal in data structure
      data.totalCalories=total;

      //return total
      return data.totalCalories;
    },
    logData: function(){
      return data;
    }
  }
})();



// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }
  
  // Public methods
  return {
    populateItemList: function(items){
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name:document.querySelector(UISelectors.itemNameInput).value,
        calories:document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item){
      // show the list
      document.querySelector(UISelectors.itemList).style.display='block';
        //create li element
        const li= document.createElement('li');
        //add class
        li.className= 'collection-item';
        //add id
        li.id= `item-${item.id}`;
        //add html
        li.innerHTML= `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>`;
        //insert item
        document.querySelector(UISelectors.itemList).insertAdjacentElement
        ('beforeend', li)
    },

    clearInput: function(){
        document.querySelector(UISelectors.itemNameInput).value='';
        document.querySelector(UISelectors.itemCaloriesInput).value='';
    },
    addItemToForm: function(){
      document.querySelector(UISelectors.itemNameInput).value=
      ItemCtrl.getCurrentItem().name;
        document.querySelector(UISelectors.itemCaloriesInput).value=
        ItemCtrl.getCurrentItem().calories;
        UICtrl.showEditState();
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display='none';
    },
    showTotalCalories: function(totalCalories){
       document.querySelector(UISelectors.totalCalories).textContent=
       totalCalories;
    },
    clearEditState: function(){
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display='none';
      document.querySelector(UISelectors.deleteBtn).style.display='none';
      document.querySelector(UISelectors.backBtn).style.display='none';
      document.querySelector(UISelectors.addBtn).style.display='inline';
    },
    showEditState: function(){
    
      document.querySelector(UISelectors.updateBtn).style.display='inline';
      document.querySelector(UISelectors.deleteBtn).style.display='inline';
      document.querySelector(UISelectors.backBtn).style.display='inline';
      document.querySelector(UISelectors.addBtn).style.display='none';
    },

    getSelectors: function(){
      return UISelectors;
    }
  }
})();



// App Controller
const App = (function(ItemCtrl, UICtrl){
  // Load event listeners
  const loadEventListeners = function(){
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    //edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateSubmit);
  }

  // Add item submit
  const itemAddSubmit = function(e){
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if(input.name !== '' && input.calories !== ''){
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      //add item to UI list
      UICtrl.addListItem(newItem);

      //get total calories
      const totalCalories=ItemCtrl.getTotalCalories();
      //add total calories to the ui
      UICtrl.showTotalCalories(totalCalories);
      //clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  //update item submit
  const itemUpdateSubmit= function(e){
    if(e.target.classList.contains('edit-item')){
      //get list item id
      const listId= e.target.parentNode.parentNode.id;

      //break into an array
      const listIdArr= listId.split('-');

      //get the actual id
      const id = parseInt(listIdArr[1]);

      //get item
      const itemToEdit= ItemCtrl.getItemsById(id);

      //set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      //add item to form
      UICtrl.addItemToForm();
    }

    e.preventDefault();
  }

  // Public methods
  return {
    init: function(){
      //clear edit state / set initial set
      UICtrl.clearEditState();

      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      //check if any items
      if(items.length===0){
        UICtrl.hideList();
      } else{
        // Populate list with items
      UICtrl.populateItemList(items);
      }

      //get total calories
      const totalCalories=ItemCtrl.getTotalCalories();
      //add total calories to the ui
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialize App
App.init();