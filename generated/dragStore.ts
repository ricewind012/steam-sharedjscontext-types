export interface dragStore {
	m_coordinator: any;
	m_mapCurrentDragPayload: any;
	m_mapDropTargets: Map<any, any>;
	m_rgEndPromises: any[];

	AddDropTarget(e);
	BIsDragInProgress();
	BIsDropTarget(e);
	GetCoordinator();
	GetDragData(e);
	RemoveDropTarget(e);
	ResetDrag();
	StartDrag(e);
	WaitForDragToEnd(): Promise<any>;
}
