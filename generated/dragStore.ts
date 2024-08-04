export interface dragStore {
	m_coordinator: {
		m_activeDraggable: any;
		m_activeDropRegion: any;
		m_dragGhost: any;
		m_dragOffWindowTimer: any;
		m_dropGhost: any;
		m_elCloneContainer: any;
		m_elCloneOriginal: any;
		m_embeddedElement: {
			m_mapEmbeddedHovers: {};
			m_strUniqueID: string;

			GetEmbeddedElement(e);
			HideElement(e, t, r);
			ShowElement(e, t, r);
			ShowElementDelayed(e, t, r, n);
		};
		m_nodeCloneCopy: any;
		m_prevClientX: number;
		m_prevClientY: number;
		m_rgActiveDropRegions: any[];
		m_rgDropRegions: object[];

		EndDrag();
		FindBestActiveDropRegionForPoint(e, t);
		HideDragGhost();
		MakeDragClone(e);
		OnDrag(e, t, r);
		OnDragStart(e);
		RegisterDropRegion(e);
		ReverseDragClone();
		ShowDragGhost();
		UnregisterDropRegion(e);
	};
	m_mapCurrentDragPayload: any;
	m_mapDropTargets: {
		changeListeners_: any;
		data_: {};
		dehancer: any;
		enhancer_(...args: any[]);
		hasMap_: {};
		interceptors_: any;
		keysAtom_: {
			diffValue_: number;
			isBeingObserved: boolean;
			isPendingUnobservation: boolean;
			lastAccessedBy_: number;
			lowestObserverState_: number;
			name_: string;
			observers_: Set<any>;
			onBOL: any;
			onBUOL: any;

			function();
			function();
			function();
			function();
			function();
		};
		name_: string;

		function(e, t);
		function();
		function(e);
		function(e);
		function();
		function(e, t);
		function(e);
		function(e);
		function(e);
		function(e);
		function();
		function(e);
		function(e, t);
		function(e);
		function(e, t);
		function();
		function();
		function(e, t);
		function();
	};
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
