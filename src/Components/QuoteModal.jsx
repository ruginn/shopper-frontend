
import { Modal } from '@mantine/core';
import '../styles/QuoteModal.css'

export default function QuoteModal({quoteModal, setQuoteModal}) {



  return (
    <>
      <Modal 
        opened={quoteModal} 
        title="Request a quote"
        size='lg'
        onClose={()=>setQuoteModal(false)}
                        
      >
        <form action="" className='quote--modal'>
            <label htmlFor="name">Name</label>
            <input type="text" id='name'/>
            <label htmlFor="amount">Quantity</label>
            <input type="text" id='amount'/>
            <label htmlFor="message">Message</label>
            <input type="text" id='message'/>
            <button type='submit'>Request quote</button>
        </form>
      </Modal>
    </>
  );
}