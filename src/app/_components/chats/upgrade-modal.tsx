import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '~/components/ui/dialog'
import { Button } from '~/components/ui/button'
import ShinyText from '~/components/shiny-text';
import { Separator } from '~/components/ui/separator';

const UpgradeModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-neutral-900 border border-neutral-700">
        <DialogTitle className='flex items-center justify-center mx-auto'>
          <ShinyText text="Upgrade To Pro" disabled={false} speed={3} className='custom-class' />
        </DialogTitle>
        <Separator className='bg-neutral-600/50' />
        <p className="text-secondary/70 text-sm mb-4">
          Unlock additional commit styles like <strong>emoji, jira, strict</strong> with a Pro plan.
        </p>
        <Button className="w-full" onClick={() => {
          onClose();
        }}>
          Upgrade Now
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeModal;
