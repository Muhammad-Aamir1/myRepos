import {
  Drawer,
  DrawerBody,
  
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
 
} from "@chakra-ui/react";
import Sidebar from "./Sidebar";
// import Sidebar from "./Sidebar";

 

const SideDrawer = ({isOpen,onClose}) => {
 
  return (
    <>
     {isOpen &&  
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        
       >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
           
 
          <DrawerBody>
             <Sidebar/>
          </DrawerBody>

         
        </DrawerContent>
      </Drawer>}
    </>
  );
};

export default SideDrawer;
