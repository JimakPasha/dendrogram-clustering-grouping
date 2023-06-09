import { FormHelperText } from '@mui/material';
import { ViewDendrogram, Modal, ActionMenu } from './components';

export const Dendrogram = () => {
  return (
    <>
      <FormHelperText>
        By clicking on a node, you can <u>add/rename/delete</u> the node
      </FormHelperText>
      <ViewDendrogram />
      <ActionMenu />
      <Modal />
    </>
  );
};
