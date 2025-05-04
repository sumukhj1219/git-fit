import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '~/components/ui/dialog'
import { Button } from '~/components/ui/button'

const UpgradeModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-neutral-900 border border-neutral-700">
        <DialogHeader>
          <DialogTitle className="text-purple-400">Upgrade to Pro</DialogTitle>
        </DialogHeader>
        <p className="text-secondary/70 text-sm mb-4">
          Unlock additional commit styles like <strong>casual, jira, strict</strong> with a Pro plan.
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
