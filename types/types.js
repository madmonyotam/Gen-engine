class Types {
    constructor(){
        this.types = {};
    }

    getTypes(){
       return this.types; 
    }

    getTypesArrangeByGroups(){
        let typesByGroup = {};
        for (const key in this.types) {

            const type = this.types[key];
            const group = type.group;
            

            if(!typesByGroup[group]) typesByGroup[group] = {};
            typesByGroup[group][key] = type;
        }

        return typesByGroup;
    }

    addTypes(types){
        //TODO: check for same type name;
        this.types = { ...this.types, ...types }
    }

    getTypesByGroup(groupName){
      let group = [];
      for (const key in this.types) { 
          const type = this.types[key];        
          if(type.group === groupName) group.push(type);
      }

      return group;
    }

    getTypeByKey(key){
        return this.types[key];
    }
}

module.exports = Types;
