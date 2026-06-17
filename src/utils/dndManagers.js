import { 
	DragDropManager,
	PointerSensor,
	PointerActivationConstraints,
} from '@dnd-kit/dom';

export const tarefasManager = new DragDropManager({
	sensors: [
		PointerSensor.configure({
			activationConstraints: [
				new PointerActivationConstraints.Distance({value: 8}),
				new PointerActivationConstraints.Delay({value: 150, tolerance: 5}),
			],
		}),
	],
});

