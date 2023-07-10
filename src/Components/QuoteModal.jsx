import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';

export default function QuoteModal({quoteModal, setQuoteModal}) {
//   const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal 
        opened={quoteModal} 
        title="Request a quote"
        size='lg'
        onClose={()=>setQuoteModal(false)}
                        
      >
        <form action="">
            <label htmlFor="name">name</label>
            <input type="text" />
            <label htmlFor="Amount">amount</label>
            <input type="text" />
            <label htmlFor="">Message</label>
            <input type="text" />
            <button type='submit'>Request quote</button>
        </form>
      </Modal>
    </>
  );
}