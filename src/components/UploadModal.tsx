import React from 'react'
import Modal from './Modal'
import useUploadModal from '@/hooks/useUploadModal';

interface UploadModalProps {
}

const UploadModal: React.FC<UploadModalProps> = () => {
  const uploadModal = useUploadModal();

  const onChange = () => {
    if(uploadModal.isOpen){
      uploadModal.onClose();
    }
  }

  return (
    <Modal title="add a song" description='adding a song' isOpen={uploadModal.isOpen} onChange={onChange}>
      modal
    </Modal>
  )
}

export default UploadModal